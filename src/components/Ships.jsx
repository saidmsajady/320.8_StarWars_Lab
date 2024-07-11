import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Ships({ data }) {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Ships</h1>
      <Grid columns={4}>
        {data.map((ship, i) => (
          <Grid.Column key={i}>
            <Card>
              <Card.Content>
                <Card.Header>{ship.name}</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
}
