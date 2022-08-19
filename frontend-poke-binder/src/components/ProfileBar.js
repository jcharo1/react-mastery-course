import React from "react";
import { Progress, Grid } from "semantic-ui-react";

const ProgressExampleStandard = () => (
  <div>
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Progress color="yellow" active percent={11} size="medium" progress>
            Base Set
          </Progress>
        </Grid.Column>
        <Grid.Column>
          <Progress color="yellow" active percent={20} size="medium" progress>
            Fossil Set
          </Progress>
        </Grid.Column>
        <Grid.Column>
          <Progress color="yellow" active percent={50} size="medium" progress>
            Jungle Set
          </Progress>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default ProgressExampleStandard;
