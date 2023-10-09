import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "image",
    headerName: "image",
    width: 550,
    height: 550,
    renderCell: (params) => <img src={params.value} />,
  },
  { field: "id", headerName: "ID", type: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: false,
  },

  {
    field: "specality",
    headerName: "Specality",
    width: 150,
    editable: false,
  },

  {
    field: "appointmentPrice",
    headerName: "Price (in EGP)",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "dateAndTimeAvailable",
    headerName: "Date and time available",

    width: 160,
    editable: false,
  },
  //{
  // field: 'fullName',
  //  headerName: 'Full name',
  //  description: 'This column has a value getter and is not sortable.',
  //  sortable: false,
  //  width: 160,
  //  valueGetter: (params) =>
  //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  {
    image:
      "https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg",
    id: 1,
    firstName: "Jon",
    lastName: "Snow",
    specality: "ear",
    appointmentPrice: 35,
    dateAndTimeAvailable: "4/5/2023 , 4:00 pm",
  },
  {
    image:
      "https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg",
    id: 2,
    firstName: "Tim",
    lastName: "Car",
    specality: "eye",
    appointmentPrice: 40,
    dateAndTimeAvailable: "10/5/2023 , 3:00 pm",
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: "100%", width: "100%"  }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
