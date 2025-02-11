const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am a h1 tag"),
    React.createElement("h2", {}, "i am a h1 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am a h1 tag"),
    React.createElement("h2", {}, "i am a h1 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello from react"
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
