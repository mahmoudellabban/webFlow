import React from "react";
import hero from "../../assets/hero.jpeg";
import "./home.css";
const Home = () => {
  return (
    <div className="hero">
      <div className="text">
        <h1>حطم حاجز البرمجة</h1>
        <p>
          الآن يمكنك أن تقوم ببناء مواقع تجارية وشخصية بشكل أفضل وأسرع من أي وقت
          مضى وبدون كتابة أي سطر برمجي.
        </p>
        <div className="btn">
        <button>
            أنشئ موقعك اليوم مجانًا
        </button>
        </div>
      </div>
        <img src={hero} alt="hero" />
    </div>
  );
};

export default Home;
