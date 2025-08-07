"use client";
import { useState } from "react";
import type { Skills } from "../../data/info.type";
import { Card, CardContent } from "../react-components/Card";
import { Button } from "../react-components/button";
import {Badge} from '../react-components/badge'

interface Props {
  skills: Skills;
  languaje?: 'es'| 'en';
}

export default function SkillFilter({ skills, languaje='es' }: Props) {
  const All = languaje=='es' ? "Todo" : "All" 
  const [selected, setSelected] = useState(All);

  // Agrupar por área (una skill puede estar en varias)
  const grouped: Record<string, string[]> = {};
  for (const skill of skills) {
    for (const area of skill.areas) {
      if (!grouped[area]) grouped[area] = [];
      grouped[area].push(skill.nombre);
    }
  }

  const areas = Object.keys(grouped);
  

  // Filtrar según el área seleccionada
  const filteredSkills =
    selected === All
      ? skills
      : skills.filter((skill) => skill.areas.includes(selected));

  return (
    <section className="my-9">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {languaje == 'es' ? "Habilidades Técnicas" : 'Skills'}
      </h2>
        <Card>
          <CardContent className="p-6">
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selected === All ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelected(All)}
                >
                  {All}
                </Button>
                {areas.map((area) => (
                  <Button
                    key={area}
                    onClick={() => setSelected(area)}
                    variant={selected === area ? "default" : "outline"}
                  >
                    {area}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {filteredSkills.map((skill) => (
                  <Badge key={skill.nombre} variant={'outline'} className=" px-3.5">
                    {skill.nombre}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
