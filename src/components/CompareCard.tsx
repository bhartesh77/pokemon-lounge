import React from "react";

const CompareCard = ({data1, data2}) => {

    const getColor =(first, second) => {
        if(first === second) return 'text-yellow-600 font-bold'
        return first > second ? 'text-green-600 font-bold animate-pulse' : 'text-red-600 font-bold';
    }

  return (
    <div>
      <div className="w-[40vw] h-[80vh] bg-purple-900 rounded-lg overflow-hidden shadow-xl overflow-scroll overflow-x-hidden custom-scrollbar">
        <img
          className="w-full h-[40vh] object-contain"
          src={data1.sprites.other["official-artwork"].front_default}
          alt={data1.name}
        />

        <div className="px-6 py-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-white">{data1.name}</h1>
            <p className="text-gray-300 text-base">
              
              <span className="text-gray-200">{data1.types[0].type.name}</span>
            </p>
            <p className="text-gray-300 text-base">
            Experience <span className={`${getColor(data1.base_experience, data2.base_experience)}`}>{data1.base_experience}</span>
            </p>
          </div>

          <div className="mb-4">
            {data1.stats.map((obj, index) => (
              <div
                className="flex justify-between items-center mb-2"
                key={obj.stat.name}
              >
                <div className="text-gray-400">{obj.stat.name}</div>
                <div className={`${getColor(obj.base_stat, data2.stats[index].base_stat)}`}>{obj.base_stat}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-between">
            <div className="mr-4">
              <p className="font-semibold mb-1 text-gray-300">
                Abilities:{" "}
                <span className={`${getColor(data1.abilities.length, data2.abilities.length)}`}>{data1.abilities.length}</span>
              </p>
              {data1.abilities.map((obj) => (
                <div key={obj.ability.name} className="text-gray-400">
                  {obj.ability.name}
                </div>
              ))}
            </div>

            <div>
              <p className="font-semibold mb-1 text-gray-300 text-left pl-4">
                Moves:{" "}
                <span className={`${getColor(data1.moves.length, data2.moves.length)}`}>{data1.moves.length}</span>
              </p>
              <div className="max-h-40 overflow-y-auto custom-scrollbar pr-4 pl-4">
                {data1.moves.map((obj) => (
                  <div key={obj.move.name} className="text-gray-400 text-left">
                    {obj.move.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareCard;
