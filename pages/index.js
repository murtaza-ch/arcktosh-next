import { useCallback, useState } from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import { Fragment } from "react";
import Head from "next/head";
import Heading from "../components/Heading";
import P from "../components/Heading/P";
import TopBar from "../components/TopBar";
import axios from "axios";

export default function Home(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [attach, setAttach] = useState(null);
  const [dept, setDept] = useState("");
  const [topic, setTopic] = useState("");

  const handleDept = (e) => {
    setDept(e.target.value);
  };

  const handleTopic = (e) => {
    setTopic(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAttach = (e) => {
    setAttach(e.target.files[0]);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleAttachmentUpload = useCallback(async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (title) formData.append("title", JSON.stringify(title));
    if (topic) formData.append("topic", JSON.stringify(topic));
    if (desc) formData.append("desc", JSON.stringify(desc));
    if (dept) formData.append("dept", JSON.stringify(dept));
    if (attach) formData.append("files", JSON.stringify(attach));
    try {
      const uploadedFiles = await axios.post(
        "http://socoed.co.za/api/support-tickets",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(uploadedFiles);

      if (!uploadedFiles.ok) {
        console.log("Uploaded");
        // TODO: Put some error alert
      }

      setDocuments((state) => {
        setDocuments([...state, ...uploadedFiles.data]);
      });
    } catch (err) {
      console.log(err);
      // TODO: Put some error alert
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="This is a boilerplate for Nextjs" />
      </Head>
      <TopBar />
      <P />
      <Heading>Submit Ticket</Heading>
      <form onSubmit={handleAttachmentUpload}>
        <Form
          data={props}
          handleAttach={handleAttach}
          handleDept={handleDept}
          handleTitle={handleTitle}
          handleTopic={handleTopic}
          handleDesc={handleDesc}
        />
        <div className="p-10 flex justify-center space-x-3 items-center w-full">
          <Button primary title="Submit" type="submit" />
          <Button title="Submit" />
        </div>
      </form>
    </Fragment>
  );
}

export async function getServerSideProps() {
  const [
    support_comments,
    support_topics,
    support_departments,
    support_statuses,
  ] = await Promise.all([
    fetch("http://socoed.co.za/api/support-comments"),
    fetch("http://socoed.co.za/api/support-topics"),
    fetch("http://socoed.co.za/api/support-departments"),
    fetch("http://socoed.co.za/api/support-statuses"),
  ]);
  const [
    supportComments,
    supportTopics,
    supportDepartments,
    supportStatuses,
  ] = await Promise.all([
    support_comments.json(),
    support_topics.json(),
    support_departments.json(),
    support_statuses.json(),
  ]);
  return {
    props: {
      supportComments,
      supportTopics,
      supportDepartments,
      supportStatuses,
    },
  };
}
