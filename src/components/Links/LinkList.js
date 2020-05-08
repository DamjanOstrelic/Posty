import React from "react";
import firebase from "../../firebase";
import { IonReactRouter } from "@ionic/react-router";

const LinkList = (props) => {
  const [links, setLinks] = React.useState([]);
  const isTrending = props.location.pathname.includes("trending");

  IonReactRouter.useEffect(() => {
    const unsubscribe = getLinks();
    return () => unsubscribe();
  }, [isTrending]);

  function getLinks() {
    if (isTrending) {
      return firebase.db
        .collection("links")
        .orderBy("voteCount", "desc")
        .onSnapshot(handleSnapshot);
    }
    return firebase.db
      .collection("links")
      .orderBy("created", "desc")
      .onSnapshot(handleSnapshot);
  }
  function handleSnapshot(snapshot) {
    const links = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setLinks(links);
  }

  return (
    <>
      {links.map((link, index) => (
        <LinkItem key={link.id} />
      ))}
    </>
  );
};
