import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnChooser,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Toolbar
} from "@syncfusion/ej2-react-grids";
import { fetchData } from "../services/api";
import "./DataGrid.css";

function DataGrid() {
  const [data, setData] = useState([]);
  const [tableVisible, setTableVisible] = useState(true);
  const [filter, setFilter] = useState(null);

  const toolbarOptions = ["ColumnChooser"];

  useEffect(() => {
    if (tableVisible && data.length === 0) {
      // Fetching data from the API we wrote in services/api.js to render data on component mounts
      fetchData()
        .then((data) => {
          // Replacing null values with placeholder "--"
          const formattedData = data.map((item) => ({
            ...item,
            // Replace null with "--" for specific fields
            FirstName: item.FirstName || "--",
            LastName: item.LastName || "--",
            Gender: item.Gender,
            Age: item.Age || "--",
            Emails: item.Emails
          }));
          setData(formattedData);
        })
        .catch((error) => console.error(error));
    }
  }, [tableVisible, data.length]);

  //Custom email template fuction to display the emails in new line
  function emailTemplate(props) {
    return (
      <div>
        {props.Emails.length > 1
          ? props.Emails.map((email, index) => <div key={index}>{email}</div>)
          : "--"}
      </div>
    );
  }

  //Custom gender template function to display icons based on the gender
  function getGender(props) {
    return (
      <div className="gender-container">
        <div className="empimg">
          <span
            className={`e-icons ${
              props.Gender === "Male" ? "sf-icon-Male" : "sf-icon-FeMale"
            }`}
          />
        </div>
        <span id="Emptext">{props.Gender ?? "--"}</span>
      </div>
    );
  }

  //Setting Page size to 5, that will display only 5 reconds per page
  const pageOptions = {
    pageSize: 5,
    pageSizes: true
  };

  //Show-Hide button that would show or hide the table
  const toggleTableVisibility = () => {
    setTableVisible(!tableVisible);
  };

  //Filtering functionality based on the button clicked of Gender(Male or Female)
  const applyFilter = (gender) => {
    setFilter(gender);
  };

  //Displaying of 1. Show columns: FirstName, LastName, Gender, Age, Emails
  return (
    <div>
      <h2>SyncFusion DataGrid Challenge!</h2>
      <button onClick={toggleTableVisibility} className="toggle-button">
        {tableVisible ? "Hide Table" : "Show Table"}
      </button>

      <div className="gender-button">
        <button className="male-button" onClick={() => applyFilter("Male")}>
          Filter Male
        </button>
        <button className="female-button" onClick={() => applyFilter("Female")}>
          Filter Female
        </button>
      </div>
      {tableVisible && (
        <GridComponent
          locale="en-US"
          dataSource={data.filter((item) =>
            filter ? item.Gender === filter : true
          )}
          allowPaging={true}
          pageSettings={pageOptions}
          height={272}
          toolbar={toolbarOptions}
          showColumnChooser={true}
          loadingIndicator={{ indicatorType: "Shimmer" }}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="FirstName"
              headerText="First Name"
              headerTextAlign="Center"
            />
            <ColumnDirective
              field="LastName"
              headerText="Last Name"
              headerTextAlign="Center"
            />
            <ColumnDirective
              field="Gender"
              headerTextAlign="Center"
              clipMode="EllipsisWithTooltip"
              template={getGender}
            />
            <ColumnDirective field="Age" headerTextAlign="Center" />
            <ColumnDirective
              field="Emails"
              headerText="Emails"
              template={emailTemplate}
              headerTextAlign="Center"
            />
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, ColumnChooser]} />
        </GridComponent>
      )}
    </div>
  );
}

export default DataGrid;
