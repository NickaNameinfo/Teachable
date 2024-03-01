import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as React from "react";

const Certificate = () => {
  const onClickPrint = () => {
    const element = document.getElementById("certificateContent");

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      //   const imgData = canvas.toDataURL("image/png");
      //   const pdf = new jsPDF();
      //   pdf.addImage(imgData, "PNG", 0, 0, 210, 100); // Adjust width and height as needed
      //   pdf.save("certificate.pdf");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "certificate.png";
      link.click();
    });
  };

  return (
    <div>
      <button onClick={onClickPrint}>Print</button>

      <div
        id="certificateContent"
        style={{
          width: "65%",
          margin: "auto",
          backgroundImage: `radial-gradient(#ffffffcf, #ffffffcf), url('/./src/assets/img/Online-Learning.jpg')`,
          position: "relative",
          backgroundSize: "cover",
          padding: "10px",
        }}
      >
        <p>Certificate No: KL/BC/01/024</p>
        <div style={{ textAlign: "center" }}>
          <img src={"/./src/assets/img/logo/logo_1.png"} alt="logo" width={"35%"} />
          <h2>CERTIFICATE OF COMPLETION</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px 0px",
          }}
        >
          <div
            style={{
              width: "240px",
              background: "#3b51a4",
              borderRadius: "50%",
              padding: "40px",
            }}
          >
            <img src={"/./src/assets/img/about/about_12.png"} alt="" width={"100%"} />
          </div>
          <div style={{ textAlign: "center" }}>
            <h4>THIS CERTIFICATE IS AWARDED TO</h4>
            <h3>DEVIAPSARA P</h3>
            <p>of</p>
            <h6>Velammal College of Engineering and Technology</h6>
          </div>
        </div>
        <p>
          by Krosumlabs for the successful completion of ONLINE BRIDGE COURSE in
          which he.she has learnt LINUX ESSENTIAL, PYTHON PROGRaMMING / SQLITE3
          conduceted from 15th AUGUST, 2020 to 1st NOVEMBER, 2020, He/She is
          also appreciated for the mini project done with the knowledge acquired
          from the above metioned technologies{" "}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ textAlign: "center" }}>
            <img src={"/./src/assets/img/logo/logo_1.png"} alt="" style={{ width: "15%" }} />
            <h6>Palani Karthikeyan</h6>
            <h5>ACADEMY TECHNICAL CONSULTANT</h5>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={"/./src/assets/img/logo/logo_1.png"} alt="" style={{ width: "15%" }} />
            <h6>Theeba</h6>
            <h5>ACADEMY DIRECTOR</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
