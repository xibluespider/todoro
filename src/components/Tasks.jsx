import { Button, Input, Checkbox, Card, CardBody } from "@nextui-org/react";

import { Plus, Pencil, Trash } from "lucide-react";

export default function Tasks() {
  return (
    <div className="flex flex-col md:w-[60%] mx-auto space-y-5 mt-5 p-2">
      <div className="flex space-x-3 items-center">
        <Input />
        <Button isIconOnly size="sm" className="p-2">
          <Plus />
        </Button>
      </div>

      <Card>
        <CardBody>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 mx-3">
              <Checkbox />
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                inventore in rerum? Nostrum fugit culpa vero aliquid pariatur
                omnis? Assumenda nulla enim, eaque exercitationem dignissimos
                nam voluptatum dolor accusamus quo. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nostrum sit animi ad voluptatum,
                temporibus inventore alias laborum voluptatem pariatur delectus
                quod error itaque beatae tempora illum eaque? Atque, voluptas
                sapiente!
              </div>
            </div>
            <div className="flex space-x-2">
              <Button isIconOnly size="sm" className="p-2">
                <Pencil />
              </Button>
              <Button isIconOnly size="sm" className="p-2">
                <Trash />
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
