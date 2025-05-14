import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Rating,
} from "@material-tailwind/react";

import "./Local.css";

export function Local() {
  return (
    <div className="local-container">
      <div>
        <span> Ver todos os lugares </span>
      </div>
      
      <div className="flex flex-row items-center justify-center gap-1 mr-12 my-6">
        <img className=" w-2/3" src="https://park.com.br/wp-content/uploads/2018/12/park-hotel-boa-viagem-recife-pe-capela-dourada.png" alt="" />
        <div className="flex flex-col gap-1 w-1/3">
          <img src="https://park.com.br/wp-content/uploads/2018/12/park-hotel-boa-viagem-recife-pe-capela-dourada.png" alt="" />
          <img src="https://park.com.br/wp-content/uploads/2018/12/park-hotel-boa-viagem-recife-pe-capela-dourada.png" alt="" />
        </div>
      </div>

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
            className="mx-0 flex items-center gap-4 pt-0 pb-2 mr-1"
          >
            <div className="flex w-full flex-col gap-0.5">
              <div className="ml-3 flex items-center gap-0">
                <Rating value={5} readonly />
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
              Lugar imperdível em Recife. Lindamente adornada em ouro, é
              possível fazer fotos incríveis. O ingresso dá direito a guia e
              custa R$ 15,00. Aceitam pix
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
