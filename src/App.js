import React, { Component } from "react";
import "./App.css";
import Customer from "./compoents/Customer";

const customer = [
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
];

class App extends Component {
  render() {
    return (
      <div>
        {customer.map((c) => {
          return (
            <Customer
              key={c.id} // map이라는 메서드를 이용시에는 key값을 설정해줘야하고 중복되지 않는값으로 정의해주면된다.
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
