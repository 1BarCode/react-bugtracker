import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { Bar, Line } from "react-chartjs-2";

import useStyles from "./styles";

const Dashboard = () => {
  const classes = useStyles();

  const graph1Data = {
    labels: ["None", "Low", "Medium", "High", "ASAP", "Emergency"],
    datasets: [
      {
        label: "# of Tickets",
        data: [11, 15, 3, 8, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper}>
              <Bar
                data={graph1Data}
                options={{
                  maintainAspectRatio: true,
                  scales: {
                    y: { beginAtZero: true },
                  },
                  plugins: {
                    title: {
                      display: true,
                      text: "Tickets By Priority",
                      padding: "0",
                      font: {
                        size: "16",
                      },
                    },
                  },
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper}>
              <Line
                data={graph1Data}
                options={{
                  maintainAspectRatio: true,
                  scales: { y: { beginAtZero: true } },
                  plugins: {
                    title: {
                      display: true,
                      text: "Tickets By Priority",
                      padding: "0",
                      font: {
                        size: "16",
                      },
                    },
                  },
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper}>
              <Line
                data={graph1Data}
                options={{
                  maintainAspectRatio: true,
                  scales: { y: { beginAtZero: true } },
                  plugins: {
                    title: {
                      display: true,
                      text: "Tickets By Priority",
                      padding: "0",
                      font: {
                        size: "16",
                      },
                    },
                  },
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper}>
              <Bar
                data={graph1Data}
                options={{
                  maintainAspectRatio: true,
                  scales: { y: { beginAtZero: true } },
                  plugins: {
                    title: {
                      display: true,
                      text: "Tickets By Priority",
                      padding: "0",
                      font: {
                        size: "16",
                      },
                    },
                  },
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
