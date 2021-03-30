import React from 'react';
import { List, Icon, Segment } from 'semantic-ui-react';
import { OccupationalHealthcareEntry, Diagnosis } from '../types';

interface EntryProps {
    entry: OccupationalHealthcareEntry;
    diagnosis: Diagnosis[];
}

const OHEntry:React.FC<EntryProps> = ({entry, diagnosis}) => {
    return (
        <Segment>
            <List verticalAlign='middle'>
                <List.Item>
                    <List.Content>
                        <List.Header>
                            { entry.date } <Icon name="stethoscope" size="large" />
                            { entry.employerName }
                        </List.Header>
                        { entry.description }
                    </List.Content>
                </List.Item>
            </List>
            <List>
                {entry.diagnosisCodes && entry.diagnosisCodes.map(dc=><List.Item key={dc}>{dc}: {diagnosis.find(d=>d.code === dc)?.name}</List.Item>)}
            </List>
        </Segment>
    );
};
export default OHEntry;