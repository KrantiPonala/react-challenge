# Exercise delivery

Documentation:
API -> https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People
SyncFusion DOC -> https://ej2.syncfusion.com/react/documentation/grid/getting-started/

## Application structure

// TODO: Explain folder structuring as clearly as if you were going to give it in the hands of your colleague to perform bugfixes and add features on this project.

## Summary

## Specs:

The applicant must produce in an elapsed 1w on StackBlitz a source code in React that renders a datagrid from the SyncFusion library by means of an API call.
It would be great to be able to do the project in TypeScript, but in case you are more comfortable with JS you can create your own empty stackblitz to start with.
NB: Make the code considering that other colleagues may take over the source.

1. Show columns: FirstName, LastName, Gender, Age, Emails
   - Created a DataGrid.js file and add SyncFusion Grid component and render the Columns using ColumnsDirective and ColumnDirective
2. In case of null value show placeholder "--"
   - After invoking the API function, the data the is being received is spread and formatted for specific field values that have null to include "--" in place
3. For the Gender column, convert the Male and Female value to an icon of your choice
   - Created custom template function that checks for what the gender is and render the icons based on the value.
     I have used SyncFusion material icons:
     Male - e306 ^^
     Female - e300 >>
4. For the Emails column show the list of addresses
   - Created custom email function to separate the emails by comma and render them in each new line. Also, to update "--" in place of null values
5. Realize client side pagination with no.5 items per page
   - Used pageOptions which include pageSize set to 5 and passed this down to PageSettings property of GridComponent.
     Imported Page service from "@syncfusion/ej2-react-grids" and passed it to services attribute of Inject component
6. Introduce a column chooser to select the columns you want to see on the screen
   - Added a Toolbar and ColumnChooser from "@syncfusion/ej2-react-grids" and passed that to Inject component services property
7. Make a button outside the table that when clicked shows/hides the table. When the table reappears, another GET should not start to retrieve-are data.
   - Created a button that would render data on the button dynamically to show/hide when the button is clicked. Also, added condition to check only if tableVisible && data.length === 0 to call an api and added these two as dependencies for useEffect() hook

## Below are optional 1-level activities:

8. Introduce two buttons to be able to filter gender

- I have created two new buttons external to the table based on the gender button value. The data will be filtered.

9. Introduce a button to GET the data with a debounce (try to use redux-saga)

- Work in progress. Have few doubts. With time I got today I could able to complete so far. Once this is done I will be sharing this as well.

## Below are optional 2-level activities:

10. Introducing Redux and managing API calls via Redux-Saga

- // TODO: Explain the process

11. Managing email through a child grid

- // TODO: Explain the process

12. Implement export via excel using syncfusion table functionality.

- // TODO: Explain the process

## Below are optional 3-level activities:

13. Enable inline editing on the row(without patching to backend) and in particular on the Gender field

- // TODO: Explain the process

14. Create a custom toolbar with a custom button that removes only odd rows

- // TODO: Explain the process

15. Create custom button that removes only odd rows but this time add it to the Out Of The Box toolbar (the original Syncfusion one)

- // TODO: Explain the process

16. Apply a mapping on the Gender column when exporting, you want the data on the excel to appear formatted differently from how it is shown in the grid.
    Example:
    In table it will show via an icon
    In excel it will show via a label: Male (Gender) or / Female (Gender)

- // TODO: Explain the process

## Thoughts

// TODO:

- Did you find complications?
- Did you find bugs in the Syncfusion library?
