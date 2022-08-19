import React from "react";
import { Progress } from "semantic-ui-react";

const ProgressExampleStandard = () => (
  <div>
    <Progress color="yellow" active percent={11} size="large" progress>
      Base Set
    </Progress>
    <Progress color="yellow" active percent={20} size="large" progress>
      Fossil Set
    </Progress>
    <Progress color="yellow" active percent={50} size="large" progress>
      Jungle Set
    </Progress>
  </div>
);

export default ProgressExampleStandard;
