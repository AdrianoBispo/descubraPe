import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import "./Local.css";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Local() {
  return (
    <div className="local-container">
      <div>
        <span> Ver todos os lugares </span>
      </div>

      {/* Seção da Galeria
      
      <div>
        
      </div> */}

      <div>
        <h2>Informações</h2>
        <div>
          <p>
            Endereço:
            <span>
              {" "}
              Altura da rua Siqueira Campos, R. do Imperador Pedro II, S/N -
              Santo Antônio, Recife - PE, 50010-240
            </span>
          </p>

          <p>
            Horário de Funcionamento*:
            <span>(Segunda a Sexta-feira)</span>
          </p>
        </div>
      </div>

      <div className="mt-32 flex flex-col">
        <Card
          color="transparent"
          shadow={false}
          className="max-w-[60rem] border rounded-xl"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-2"
          >
            <div className="flex w-full flex-col gap-0.5">
              <div className="ml-3 flex items-center gap-0">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <p className="ml-1">(5)</p>
              </div>
            </div>
            <Typography className="mr-3 text-nowrap" color="blue-gray">
              Abr 2025
            </Typography>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography variant="h6" className="ml-3 text-blue-800">
              Vale a pena lugar singular
            </Typography>
            <Typography className="text-blue-600 ml-3 mt-2">
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
            </Typography>

            <div className="mt-4 flex flex-row items-center">
              <Avatar
                size="sm"
                variant="circular"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
                className="ml-3"
              />

              <Typography className="text-blue-600 ml-3">
                Por<span> Marcus</span>
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
