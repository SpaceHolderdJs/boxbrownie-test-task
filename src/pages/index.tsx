import { Header } from "@/components/static/Header";
import "../app/globals.css";
import { UploadFile } from "@/components/static/UploadFile";
import { TitleSection } from "@/components/static/TitleSection";
import { ResultSection } from "@/components/static/ResultSection";

const Home = () => {
    return (
        <div className="w-full bg-gray-200 min-h-screen flex flex-col items-center">
            <Header />

            <div className="w-9/12 flex flex-col justify-center">
                <TitleSection />
                <UploadFile />
                <ResultSection />
            </div>
        </div>
    );
};

export default Home;
