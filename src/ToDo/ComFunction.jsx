import { Button } from "react-bootstrap";

export const taskModifier = (ele, whatToModify, props) => {
  // e.category
  // console.log(e)
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
        // console.log(whatToModify[key]);
        ele[key] = whatToModify[key]
    }
}
    // whatToModify.map((e) => (ele[e] = ele[]));
  // ele[whatToModify] = updateValue;

  ele.created = generateDate;
  props(ele.id, ele);
  // console.log(e.category, 'clicked')
  // localStorage.setItem("Todo", JSON.stringify(e));
  // console.log(ele);
};

export const taskButtonGenerator = (list,btnColor, prop) => {
  // console.log(list)
  const btnList =  list.category === "pending"
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
  // {
  // }
  // if (count === 'single') {
  // } else {
  //   return list.map ( (e) => (
  //     e.category === "pending"
  //       ? ["remove", "inprogress"]
  //       : e.category === "inprogress"
  //       ? ["pending", "completed"]
  //       : e.category === "completed"
  //       ? ["remove", "inprogress"]
  //       : ["pending"]
  //   ));
  // }
  // console.log(list.map ( (e) => (
  // )))
}