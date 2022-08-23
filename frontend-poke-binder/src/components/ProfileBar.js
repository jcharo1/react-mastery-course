import React from "react";
import { Progress, Grid } from "semantic-ui-react";

const ProgressExampleStandard = ({ jungleSet, baseSet, fossil }) => {
  return (
    <div>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Progress
              color="yellow"
              active
              precision
              value={baseSet}
              size="medium"
              progress
              total={151}
            >
              Base Set
            </Progress>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Progress
              color="yellow"
              active
              value={fossil}
              size="medium"
              progress
              total={62}
            >
              Fossil Set
            </Progress>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Progress
              color="yellow"
              active
              value={jungleSet}
              size="medium"
              progress
              total={64}
            >
              Jungle Set
            </Progress>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ProgressExampleStandard;
