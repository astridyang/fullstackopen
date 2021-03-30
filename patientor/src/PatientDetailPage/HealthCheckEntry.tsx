import React from 'react';
import { List, Icon, Segment } from 'semantic-ui-react';
import { HealthCheckEntry,Diagnosis } from '../types';

interface EntryProps {
    entry: HealthCheckEntry;
    diagnosis: Diagnosis[];
}
const RatingIcon: React.FC<{ rating: number }> = ({ rating }) => {
    switch (rating) {
        case 0:
            return <Icon name="heart" size="small" color="green" />;
        case 1:
            return <Icon name="heart" size="small" color="orange" />;
        case 2:
            return <Icon name="heart" size="small" color="red" />;
        case 3:
            return <Icon name="heart" size="small" color="black" />;
        default:
            return <></>;
    }
};
const HCEntry: React.FC<EntryProps> = ({ entry, diagnosis }) => {
    return (
        <Segment>
            <List verticalAlign='middle'>
                <List.Item>
                    <List.Content>
                        <List.Header>
                            {entry.date} <Icon name="user doctor" size="large" />
                        </List.Header>
                        {entry.description}
                    </List.Content>
                </List.Item>
                <List.Item>
                    <RatingIcon rating={entry.healthCheckRating} />
                </List.Item>
            </List>
            <List>
                {entry.diagnosisCodes && entry.diagnosisCodes.map(dc=><List.Item key={dc}>{dc}: {diagnosis.find(d=>d.code === dc)?.name}</List.Item>)}
            </List>
        </Segment>
    );
};
export default HCEntry;