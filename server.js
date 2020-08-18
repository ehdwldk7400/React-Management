const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ exteded: true }));

app.get("/api/customer", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1", //랜덤으로 이미지를 보여주는 사이트
      name: "양동진",
      birthday: "961222",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2", //랜덤으로 이미지를 보여주는 사이트
      name: "나동진",
      birthday: "961222",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3", //랜덤으로 이미지를 보여주는 사이트
      name: "이동진",
      birthday: "961222",
      gender: "남자",
      job: "대학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
