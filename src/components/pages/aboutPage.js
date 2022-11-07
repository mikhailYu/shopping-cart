function AboutPage() {
  return (
    <div className="aboutPageCont">
      <div className="aboutTextBoxCont">
        <img
          className="merchantImg"
          src={require("../../images/merchant.jpg")}
        ></img>
        <div className="aboutText">
          "Ahh, welcome... dear customer. Yes, right this way... Right this
          way... Come trade, in our wandering emporium. Please, buy something...
          I'm hungry. I've been hungry so long. Please... I am a Nomadic
          Merchant from Eastern Caelid. I have not come across any customers in
          many moons. Oh won't you buy something please... augh..."
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
