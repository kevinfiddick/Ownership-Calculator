import uuid4 from "uuid4";

const defaultObject = {
  name: "",
  type: "person",
  percentage: "",
};

const newOwner = (parentId = "") => {
  const id = uuid4();
  return {
    id,
    ...defaultObject,
    parentId,
  };
};

export default newOwner;
