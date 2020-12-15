import React from "react";
import moment from "moment";
import BootstrapTable from "react-bootstrap-table-next";
import "../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

//https://www.ncbi.nlm.nih.gov/pubmed/?term=[condition name]

const ConditionsTable = ({ data }) => {
    const finalData = data.map(({ key, name, onsetDateTime }) => ({
        key,
        name,
        onsetDateTime: onsetDateTime ? moment(onsetDateTime).format("YYYY-MM-DD / hh:mm A") : "n/a",
        pubmed: (
            <a rel='noopener noreferrer' href={`https://www.ncbi.nlm.nih.gov/pubmed/?term=${name}`} target='_blank'>
                Link
            </a>
        ),
    }));

    const columns = [
        {
            dataField: "name",
            text: "Condition",
            sort: true,
            align: "left",
        },
        {
            dataField: "onsetDateTime",
            text: "Onset Date / Time",
            sort: true,
            align: "left",
        },
        {
            dataField: "pubmed",
            text: "Search",
            align: "center",
            headerStyle: () => {
                return { width: "80px", textAlign: "center" };
            },
        },
    ];

    return <BootstrapTable keyField='key' data={finalData} columns={columns} striped />;
};

export default ConditionsTable;
