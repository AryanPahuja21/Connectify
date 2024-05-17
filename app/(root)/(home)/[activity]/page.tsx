import React from "react";

const page = ({ params }: { params: { activity: string } }) => {
  return <div>{params.activity}</div>;
};

export default page;
