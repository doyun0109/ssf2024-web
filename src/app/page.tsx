import OnBoardingSection from "@/components/section/OnBoardingSection";
import TypographySection from "@/components/section/TypographySection";
import CampSection from "@/components/section/CampSection";
import ScheduleSection from "@/components/section/ScheduleSection";
import QuestionSection from "@/components/section/QuestionSection";

const Home = () => {
  return (
      <>
        <OnBoardingSection />
        <TypographySection />
        <CampSection />
        <ScheduleSection />
        <QuestionSection />
      </>
  );
}

export default Home;
