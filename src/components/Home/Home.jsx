import React from "react";
import hero from "../../assets/hero.jpeg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import insta from "../../assets/insta.svg";
import behance from "../../assets/behance.svg";
import pint from "../../assets/pint.svg";
import video from "../../assets/video.mp4";
import book from "../../assets/book.svg";
import uni from "../../assets/uni.svg";
import third from "../../assets/5e4b9a3e1e21af60883a5230_showcase.svg";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="text">
          <h1>حطم حاجز البرمجة</h1>
          <p>
            الآن يمكنك أن تقوم ببناء مواقع تجارية وشخصية بشكل أفضل وأسرع من أي
            وقت مضى وبدون كتابة أي سطر برمجي.
          </p>
          <div className="btn">
            <button>أنشئ موقعك اليوم مجانًا</button>
          </div>
        </div>
        <img src={hero} alt="hero" />
      </div>
      <div className="company">
        <h1>شركات عالمية تستخدم ويب فلو</h1>
        <div className="logos">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={insta} alt="insta" />
          <img src={youtube} alt="youtube" />
          <img src={behance} alt="behance" />
          <img src={pint} alt="pint" />
        </div>
      </div>
      <div className="design">
        <div className="text">
          <h1>تصميم مباشر</h1>
          <p>
            صمم صفحات ويب مباشرة وشاهد التصميم يصبح موقع إلكتروني كامل دون
            الحاجة لكتابة كود.
          </p>
          <div className="btn">
            <button>صمم موقعك المجاني</button>
          </div>
        </div>
        <div className="video">
          <video src={video} controls loop />
          <div className="desc">
            <div className="one">
              <h3>واجهة تصميم مبتكرة</h3>
              <p>
                باستخدام ويب فلو يمكنك أن تصمم مواقع إنترنت بطريقة سهلة ومبتكرة
                دون الحاجة لكتابة كود بلغة HTML5 و CSS
              </p>
            </div>
            <div className="one">
              <h3>واجهة لإدارة المحتوى</h3>
              <p>
                أنشئ قواعد بيانات مخصصة تمامًا لأنواع محتوى ديناميكي. يمكنكم
                تعديل محتوى الموقع شكل سريع ومباشر دون الحاجة للإطلاع على
                المصدر.
              </p>
            </div>
            <div className="one">
              <h3>التفاعلات</h3>
              <p>يمكنك إنشاء وابتكار تفاعلات بين مكونات الموقع بسهولة.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="launch design">
        <div className="text">
          <h1>أطلق موقعك</h1>
          <p>
            انطلق مباشرة على شبكة استضافة سريعة وموثوقة وخالية من المتاعب تعمل
            وفقًا لعملك - بنقرة واحدة. لدينا مصممين محترفين جاهزين لمساعدتكم.
          </p>
          <div className="btn">
            <button>مصممون محترفون</button>
          </div>
        </div>
        <div className="video">
          <video src={video} controls loop />
          <div className="desc">
            <div className="one">
              <h3> مبني على خدمة آمازون AWS</h3>
              <p>
                بنية تحتية راسخة باستخدام تطبيقات آمازون والتي تمتاز بالمرونة
                والتي تمكن الجميع من الحصول على مواقع يمكنكم الإعتماد عليها مثل
                مواقع العالمية.
              </p>
            </div>
            <div className="one">
              <h3>سهولة إضافة إس-إي-أو (SEO)</h3>
              <p>
                عناصر تحكم بيانات التعريف ، خرائط مواقع XML التلقائية ، عمليات
                إعادة التوجيه 301 سهلة ، والعلامات الأساسية.
              </p>
            </div>
            <div className="one">
              <h3>إضافة أدوات التسويق</h3>
              <p>
                سهولة تامة لإضافة أدوات التسويق الإلكتروني والتعليمات البرمجية
                المخصصة
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="production design">
        <div className="text">
          <h1> صمم. عاين. اطلق</h1>
          <p>
            لا حاجة لشراء العديد من المكونات الإضافية، كل ما تحتاجه لبناء موقع
            سريع ومذهل في مكان واحد.
          </p>
          <div className="btn">
            <button>مواقع ويب فلو</button>
          </div>
        </div>
        <div className="video">
          <video src={video} controls loop />
          <div className="desc">
            <div className="one">
              <h3> صمم بشكل حر</h3>
              <p>
                يمكنك أن تحول صفحة بيضاء لموقع جميل وغني بالمكونات التفاعلية.
              </p>
            </div>
            <div className="one">
              <h3>قوالب جاهزة</h3>
              <p>
                مصممي ويب فلو المحترفين لديهم مئات القوالب الجاهزة التي ستسرع من
                إطلاقك لموقعك أو متجرك الإلكتروني.
              </p>
            </div>
            <div className="one">
              <h3>حماية قصوى</h3>
              <p>
                لا حاجة للقلق مواقع ويب فلو محمية من قراصنة الانترنت باستخدام
                القفل المزدوج. ويمكنكم الحصول على SSL مجاني لكل موقع.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="last">
        <div className="first">
          <h1>صمم موقعك مجاناً</h1>
          <p>
            أنشئ موقعك مجانًا وخذ كل الوقت الذي تحتاجه للإنطلاق. هذا صحيح، لا
            توجد تجربة هنا، عندما تنتهي من التصميم، أضف خطة موقع ونطاق مخصص
            عندما تكون مستعدًا لإطلاق موقعك للعالمية.
          </p>
          <button>الباقات والأسعار</button>
        </div>
        <div className="second">
          <div className="card">
            <img src={book} alt="" />
            <h3>المدونة</h3>
            <p>أنشئ موقعك مجانًا وخذ كل الوقت الذي تحتاجه للإنطلاق.</p>

          </div>
          <div className="card">
            <img src={uni} alt="" />
            <h3>تعلم المزيد</h3>
            <p>أنشئ موقعك مجانًا وخذ كل الوقت الذي تحتاجه للإنطلاق.</p>
          </div>
          <div className="card">
            <img src={third} alt="" />
            <h3>مواقع ويب فلو</h3>
            <p>أنشئ موقعك مجانًا وخذ كل الوقت الذي تحتاجه للإنطلاق.</p>
          </div>
        </div>
        
      </div>
      <footer>
        تم تطوير هذا الموقع من قبل محمود فتحي اللبّان، وهو مصمم حر ولا يعمل لحساب شركة ويب فلو. جميع الحقوق محفوظة 2024.
        </footer>
    </>
  );
};

export default Home;
