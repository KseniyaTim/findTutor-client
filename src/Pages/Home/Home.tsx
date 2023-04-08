import { FC } from "react";

//css
import "./Home.css";

//components
import GenericSearchField from "../../Components/Generics/GenericSearchField/GenericSearchField";

//consts
import { CITIES } from "../../consts/cities";
import { SUBJECTS } from "../../consts/subjects";

//mui
import { Button } from "@mui/material";

const Home: FC = () => {
  return (
    <div className="searchFieldsWrapper">
      <GenericSearchField options={CITIES} label="עיר" />
      <GenericSearchField options={SUBJECTS} label="מקצוע" />
      <Button
        variant="contained"
        sx={{ backgroundColor: "crimson", width: 300, height: "3rem" }}
      >
        חפש
      </Button>
    </div>
  );
};

export default Home;
