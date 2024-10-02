import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
    const {allStudentData, studentData, setstudentData } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);

        if (allStudentData.length > 0) {
            const newData = allStudentData.filter((data) => {
                return (data.name &&
                    (data.name.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
                    data._id.toLowerCase().includes(newSearchTerm.toLowerCase()))
                );
            });
            setstudentData(newData);
        }
    };


    return (
        <Container maxWidth="md" style={{ textAlign: 'center', paddingBottom: '5%' }}>
            <TextField
                id="search"
                type="search"
                label="Search"
                value={searchTerm}
                onChange={handleChange}
                sx={{ width: '80%'}}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Container>
    );
}