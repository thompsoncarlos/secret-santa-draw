import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/Form";
import ParticipantsList from "../components/ParticipantsList";

const Config = () => {
  return (
    <Card>
      <section>
        <h2>Let's Start!</h2>
        <Form />
        <ParticipantsList />
        <Footer />
      </section>
    </Card>
  );
};

export default Config;
