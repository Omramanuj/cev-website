import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

import EventsPage from "../../components/events/eventspage"

export default function Home() {
  return (
    <>
      <Navbar />

      <EventsPage />

      <Footer />

    </>
  );
}