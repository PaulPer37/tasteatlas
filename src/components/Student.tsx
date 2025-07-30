import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Data {
    lastName: string
    firstName: string
    parallel: string
}

export default function Student({ lastName, firstName, parallel }: Data) {
    return (
        <>
            <Typography component="p" variant="h4">
                {/* PENDIENTE: Renderice los props apellidos y nombres */}
                {lastName} {firstName}
            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>
                {/* PENDIENTE: Renderice el paralelo */}
                Paralelo #{parallel}
            </Typography>
        </>
    )
}
