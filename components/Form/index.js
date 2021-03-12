import React, { Fragment } from "react";

import FileUpload from "./FileUpload";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./Textarea";

const Form = ({
  data,
  handleTitle,
  handleDesc,
  handleTopic,
  handleDept,
  handleAttach,
}) => {
  return (
    <Fragment>
      <div className="grid md:grid-cols-2 w-full gap-8 p-6 sm:grid-cols-1">
        <div>
          <Input
            onChange={handleTitle}
            placeholder="Enter title here..."
            title="Title"
            name="title"
            type="text"
          />
        </div>
        <div>
          <div>
            <Input
              placeholder="Department"
              title="Department"
              name="department"
              type="text"
            />
          </div>
        </div>
        <div>
          <Select
            data={data.supportDepartments}
            title="Select Department"
            handleChange={handleDept}
          />
        </div>
        <div>
          <div>
            <Select data={data.supportStatuses} title="Select Status" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <Select
          data={data.supportTopics}
          title="Select Topic"
          handleChange={handleTopic}
        />
        <TextArea rows={7} placeholder="Summary..." onChange={handleDesc} />
      </div>
      <div className="w-full flex justify-between items-center space-x-12 p-6 ">
        <FileUpload handleAttach={handleAttach} />
        <FileUpload />
        <FileUpload />
      </div>
    </Fragment>
  );
};

export default Form;
