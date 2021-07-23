import { Button } from "react-bootstrap";

export const taskModifier = (ele, whatToModify, props) => {
  const currentdate = new Date();
  const generateDate =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes();
  for (var key in whatToModify) {
    if (whatToModify.hasOwnProperty(key)) {
      ele[key] = whatToModify[key];
    }
  }
  ele.created = generateDate;
  props(ele.id, ele);
};

export const taskButtonGenerator = (list, btnColor, prop) => {
  // console.log(list)
  const btnList =
    list.category === "pending"
      ? ["remove", "inprogress"]
      : list.category === "inprogress"
      ? ["pending", "completed"]
      : list.category === "completed"
      ? ["remove", "inprogress"]
      : ["pending"];
  return btnList.map((status, i) => (
    <Button
      key={i}
      variant={`outline-${btnColor}`}
      size="sm"
      onClick={() => taskModifier(list, { category: status }, prop)}
      className="text-capitalize mr-2"
    >
      {status}
    </Button>
  ));
};
