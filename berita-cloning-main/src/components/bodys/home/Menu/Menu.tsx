import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import News from './menucontent/News'
import Life from "./menucontent/Life";
import Baitul from "./menucontent/Baitul";
import Muallaf from "./menucontent/Muallaf";
import Love from "./menucontent/Love";
import Halal from "./menucontent/Halal";
import Travel from "./menucontent/Travel";
import Mstyle from "./menucontent/Mstyle";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="News" {...a11yProps(0)} />
          <Tab label="Life" {...a11yProps(1)} />
          <Tab label="Baitul" {...a11yProps(2)} />
          <Tab label="M Style" {...a11yProps(3)} />
          <Tab label="Muallaf" {...a11yProps(4)} />
          <Tab label="Love" {...a11yProps(5)} />
          <Tab label="Halal" {...a11yProps(6)} />
          <Tab label="Travel" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <News />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Life />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Baitul />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Mstyle />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Muallaf />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Love />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Halal />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <Travel />
      </CustomTabPanel>
    </Box>
  );
}
