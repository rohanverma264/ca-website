import React from "react";
import CardUI from "../../../common/card";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./index.css";

const Services = () => {
  const cardArray = [
    {
      icon: (
        <AssignmentOutlinedIcon
          style={{ color: "#6aa323", fontSize: "80px", fontWeight: "400", marginBottom: '10px' }}
        />
      ),
      title: "GST Services",
      content:
        "Due to the evolving nature of tax laws and constant amendments, the tax landscape",
    },
    {
      icon: (
        <AccountBalanceWalletOutlinedIcon
          style={{ color: "#6aa323", fontSize: "80px", fontWeight: "400", marginBottom: '10px' }}
        />
      ),
      title: "Financial Services",
      content:
        "Globalisation and the continued growth of international trade have made intercompany pricing",
    },
    {
      icon: (
        <AccountBalanceOutlinedIcon
          style={{ color: "#6aa323", fontSize: "80px", fontWeight: "400", marginBottom: '10px' }}
        />
      ),
      title: "Tax Planning and Management Services",
      content:
        "The tax environment is increasingly complex making the management of tax risk, controversies",
    },
    {
      icon: (
        <NewspaperOutlinedIcon
          style={{ color: "#6aa323", fontSize: "80px", fontWeight: "400", marginBottom: '10px' }}
        />
      ),
      title: "Corporate Advisory Services",
      content:
        "Businesses constantly evolve to survive and thrive. Whether you are looking to expand",
    },
    {
      icon: (
        <LanguageOutlinedIcon
          style={{ color: "#6aa323", fontSize: "80px", fontWeight: "400", marginBottom: '10px' }}
        />
      ),
      title: "Intellectual Property Right Services",
      content:
        "Entities are bound by various regulatory laws and it is important that they comply with ",
    },
    {
      icon: (
        <SettingsOutlinedIcon
          style={{ color: "#6aa323", fontSize: "80px", fontWeight: "400", marginBottom: '10px' }}
        />
      ),
      title: "Company Formation",
      content:
        "GST is a transaction tax that subsumes most of the legacy indirect taxes levied by",
    },
  ];
  return (
    <div className="services-container">
      <div className="services-head">
        <h1>What we do</h1>
        <p>One-stop solution for all your financial and tax requirements</p>
      </div>
      <div className="cards-container">
        {cardArray.map((el) => (
          <CardUI
            key={el.title}
            icon={el.icon}
            title={el.title}
            content={el.content}
            backgroundColor="#f6f6f6"
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
