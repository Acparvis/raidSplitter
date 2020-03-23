const schema = (players) => {
  return {
    "id": "my-new-form",
    "label": "My New Form",
    "type": "container",
    "renderer": "form",
    "elements": {
      "main": {
        "type": "container",
        "renderer": "div",
        "htmlClass": "row",
        "elements": {
          "name": {
            name: "name",
            label: "Name",
            type: "field",
            renderer: "text",
            fieldType: "text",
            validation: [['string'], ['required']]
          },
          "characterClass": {
            type: "field",
            renderer: "react-select",
            name: "characterClass",
            label: "Class",
            isCreatable: false,
            // validation: [['string'], ['required']],
            options: [{
              value: 0,
              label: "Druid"
            }, {
              value: 1,
              label: "Hunter"
            },
              {
                value: 2,
                label: "Mage"
              },
              {
                value: 3,
                label: "Paladin"
              },
              {
                value: 4,
                label: "Priest"
              },
              {
                value: 5,
                label: "Rogue"
              },
              {
                value: 6,
                label: "Shaman"
              },
              {
                value: 7,
                label: "Warlock"
              },
              {
                value: 8,
                label: "Warrior"
              },
            ],
          },
          "role": {
            type: "field",
            renderer: "react-select",
            name: "role",
            label: "Role",
            isCreatable: false,
            validation: [['string'], ['required']],
            options: [{
              value: 0,
              label: "Tank"
            }, {
              value: 1,
              label: "OffTank"
            },
              {
                value: 2,
                label: "DPS"
              },
              {
                value: 3,
                label: "Healer"
              }
            ],
            formGroupClass: "form-group mb-4"
          },
          "alts": {
            type: "field",
            renderer: "react-select",
            name: "alts",
            label: "Alts",
            isMulti: true,
            isCreatable: true,
            options: players.filter((p) => p.category !== "trash").map((player) => {
              return {
                value: player.name,
                label: player.name
              }
            }),
            formGroupClass: "form-group mb-4",
            validation: [['array'], ['of', [['string']]]]
          },
          isSkinner: {
            name: "isSkinner",
            label: "",
            type: "field",
            renderer: "checkbox",
            options: [{
              value: 'isSkinner',
              label: 'Skinner?'
            }],
            validation: [
              ['bool'],
            ]
          },
          "note": {
            name: "note",
            label: "Note",
            type: "field",
            renderer: "text",
            fieldType: "text",
            // validation: [['string']]
          },
          buttonsGroup: {
            type: "container",
            renderer: "button-group",
            buttonsContainerClass: "buttons-container mt-2",
            elements: {
              save: {
                type: "field",
                renderer: "button",
                name: "save",
                content: "Save",
                fieldClass: "btn-success float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                buttonType: "submit"
              }
            }
          },
        }
      },

    }
  }
}

export default schema;