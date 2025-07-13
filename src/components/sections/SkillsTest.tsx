import { Card, CardContent } from "../react-components/Card";
import {Button}  from "../react-components/button";
export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
      <Card>
        <CardContent className="p-6">
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              <Button>Todo</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
