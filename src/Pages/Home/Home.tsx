import { FC } from "react";

//css
import "./Home.css";

//components
import GenericSearchField from "../../Components/Generics/GenericSearchField/GenericSearchField";

//consts
import { CITIES } from "../../consts/cities";
import { SUBJECTS } from "../../consts/subjects";

//mui
import { Grid } from "@mui/material";

const Home: FC = () => {
  return (
    <div className="searchFieldsWrapper">
      <Grid container spacing={2} id="searchContainer">
        <Grid item xs={10} md={4}>
          <GenericSearchField options={CITIES} label="עיר" />
        </Grid>
        <Grid item xs={10} md={4}>
          <GenericSearchField options={SUBJECTS} label="מקצוע" />
        </Grid>
        <Grid item xs={5} md={2}>
          <div className="searchButton">
            חפש
          </div>
        </Grid>
      </Grid>

    </div>
  );
};

export default Home;
