import React from "react";
import Card from "./Card";
import img1 from "../assets/innovative.jpg";
import img2 from "../assets/sweetgoola.jpg";
import img3 from "../assets/insta_pizza.jpg";
import img4 from "../assets/insta__cocacola.jpg";
import img5 from "../assets/book_cover_1.jpg";
import img6 from "../assets/book_cover_2.jpg";

const Services = () => {
  const data = [
    "You can easily change the formatting of selected text in the document text by choosing a look for the selected text from the Quick Styles gallery on the Home tab. You can also format text directly by using the other controls on the Home tab. Most controls offer a choice of using the look from the current theme or using a format that you specify directly. Document text by choosing a look for the selected text from the Quick Styles gallery on the Home tab. You can also format text directly by using the other controls on the Home tab. Most controls offer a choice of using the look from the current theme or using a format that you specify directly. rent theme or using a format that you specify directly. Document text by choosing a look for the selected text from the Quick Styles gallery on the Home tab. You can also format text directly by using the other controls on the Home tab. Most controls offer a choice of using the look from the current theme or using a format that you specify directly",

    "To change the overall look of your document, choose new Theme elements on the Page Layout tab. To change the looks available in the Quick Style gallery, use the Change Current Quick Style Set command. Both the Themes gallery and the Quick Styles gallery provide reset commands so that you can always restore the look of your document to the original contained in your current template.",

    "On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document. You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look.",
  ];
  return (
    <div className="flex flex-col gap-20">
      <div className="w-full flex justify-center items-center py-2">
        <div className="container gap-5 md:gap-6 px-3 md:px-0 max-w-[1200px] flex justify-between items-center flex-col md:flex-row">
          <div className="relative w-[75vw] -ml-10 my-10 md:ml-0 md:mb-0 md:w-[320px] md:h-[320px] -mt-8">
            <img src={img1} className="rounded-2xl" />
            <img src={img2} className="rounded-2xl absolute left-10 top-10" />
          </div>
          <Card cardtitle={'Digital cards design'} titlecolor={'text-green-700'} param={data[0]} bgcolor={"bg-green-100"} />
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-2">
        <div className="container gap-5 md:gap-6 px-3 md:px-0 max-w-[1200px] flex justify-between items-center flex-col md:flex-row-reverse">
          <div className="relative w-[75vw] md:-ml-10 my-10 ml-10 md:mb-0 md:w-[320px] md:h-[320px] -mt-12">
            <img src={img3} className="rounded-2xl" />
            <img src={img4} className="rounded-2xl absolute right-10 top-10" />
          </div>
          <Card cardtitle={'Instagram carousel Design'} titlecolor={'text-sky-800'} param={data[0]} bgcolor={"bg-sky-100"} shadow={"red-700"} />
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-2">
        <div className="container gap-5 md:gap-6 px-3 md:px-0 max-w-[1200px] flex justify-between items-center flex-col md:flex-row">
          <div className="relative w-[75vw] -ml-10 my-10 md:ml-0 md:mb-0 md:w-[320px] md:h-[320px] -mt-8">
            <img src={img5} className="rounded-2xl md:h-[320px] object-cover overflow-hidden" />
            <img src={img6} className="rounded-2xl absolute left-10 top-10 md:h-[320px] object-cover overflow-hidden" />
          </div>
          <Card cardtitle={'Awesome book covers design'} titlecolor={'text-orange-700'} param={data[0]} bgcolor={"bg-orange-100"} shadow={"red-700"} />
        </div>
      </div>
    </div>
  );
};

export default Services;
