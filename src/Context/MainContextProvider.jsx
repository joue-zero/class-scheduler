import {createContext,useContext, useState} from "react";


const MainContext = createContext();

export default function MainContextProvider({children}){

    const [classes, setClasses] = useState(
        // []

        [
            {
                "id": "c34f80b9-0e2a-4b9f-8838-a95e4fd64eea",
                // "name": "Computation",
                "name": "Class1",
                "code": "CS1805",
                "versions": [
                    {
                        "id": "26eeddc8-ed28-404e-8795-9cfdef4f9711",
                        "professor": "A",
                        "timeSlots": [
                            {
                                "dayOfWeek": 0,
                                "startTime": "09:30",
                                "endTime": "10:45"
                            },
                            {
                                "dayOfWeek": 4,
                                "startTime": "11:15",
                                "endTime": "12:30"
                            }
                        ],
                        "labs": [
                            {
                                "id": "3ad486ab-bac5-4eb9-9c9a-119421a93486",
                                "name": "S1",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "09:30",
                                        "endTime": "10:45"
                                    }
                                ]
                            },
                            {
                                "id": "bcb31164-9b54-45fc-b9e6-06082f921a21",
                                "name": "S2",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "11:15",
                                        "endTime": "12:30"
                                    }
                                ]
                            },
                            {
                                "id": "19d0c6a2-3679-42f9-8457-c75ecb3d3fd9",
                                "name": "S3",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "12:45",
                                        "endTime": "14:00"
                                    }
                                ]
                            }
                        ],
                        "requiresLab": true
                    },
                    {
                        "id": "6c3f8382-307d-4e50-a4b0-29e9f19c37d6",
                        "professor": "B",
                        "timeSlots": [
                            {
                                "dayOfWeek": 0,
                                "startTime": "11:15",
                                "endTime": "12:30"
                            },
                            {
                                "dayOfWeek": 4,
                                "startTime": "12:45",
                                "endTime": "14:15"
                            }
                        ],
                        "labs": [
                            {
                                "id": "99b513ec-b391-4d86-a6a8-53f9378db554",
                                "name": "S4",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "08:00",
                                        "endTime": "09:15"
                                    }
                                ]
                            },
                            {
                                "id": "48eed3e2-5e64-4af9-ad5e-db0375ad9b69",
                                "name": "S5",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "12:45",
                                        "endTime": "14:00"
                                    }
                                ]
                            },
                            {
                                "id": "dc3035a4-a57c-418b-9aed-ce777977f091",
                                "name": "S6",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "14:30",
                                        "endTime": "15:45"
                                    }
                                ]
                            }
                        ],
                        "requiresLab": true
                    }
                ]
            },
            {
                "id": "7cb32d62-4301-4043-b3a5-59bef3cc5565",
                // "name": "Security",
                "name": "Class2",
                "code": "CS1806",
                "versions": [
                    {
                        "id": "810d5c69-192d-4349-97f8-8f7b909a4b6b",
                        "professor": "A",
                        "timeSlots": [
                            {
                                "dayOfWeek": 1,
                                "startTime": "08:00",
                                "endTime": "09:15"
                            },
                            {
                                "dayOfWeek": 3,
                                "startTime": "08:00",
                                "endTime": "09:15"
                            }
                        ],
                        "labs": [
                            {
                                "id": "d94586f3-5252-42cf-9c48-90e903333db0",
                                "name": "S1",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "09:30",
                                        "endTime": "10:45"
                                    }
                                ]
                            },
                            {
                                "id": "cfb4f6b0-f1b0-48ef-bdb9-8ed639d20a1e",
                                "name": "S2",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "11:15",
                                        "endTime": "12:30"
                                    }
                                ]
                            },
                            {
                                "id": "73ada8f6-fbf0-442e-9e0c-75d00cb44e0a",
                                "name": "S3",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "12:45",
                                        "endTime": "14:00"
                                    }
                                ]
                            }
                        ],
                        "requiresLab": true
                    },
                    {
                        "id": "8ab909e1-681f-4c87-8a75-6cc30e974616",
                        "professor": "B",
                        "timeSlots": [
                            {
                                "dayOfWeek": 1,
                                "startTime": "09:30",
                                "endTime": "10:45"
                            },
                            {
                                "dayOfWeek": 3,
                                "startTime": "09:30",
                                "endTime": "10:45"
                            }
                        ],
                        "labs": [
                            {
                                "id": "5097564a-6d86-4a34-8bcd-d2264c74cabf",
                                "name": "S6",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "08:00",
                                        "endTime": "09:15"
                                    }
                                ]
                            },
                            {
                                "id": "f7c47b21-0a3f-4899-8a38-97074af95bc0",
                                "name": "S5",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "11:15",
                                        "endTime": "12:30"
                                    }
                                ]
                            },
                            {
                                "id": "6be2dd59-e3b0-4d9e-9076-ef53159ef8b6",
                                "name": "S4",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "12:45",
                                        "endTime": "14:00"
                                    }
                                ]
                            }
                        ],
                        "requiresLab": true
                    }
                ]
            },
            {
                "id": "68f9f9d8-e4b4-49b4-addd-af72550971cb",
                // "name": "Distributed",
                "name": "Class3",
                "code": "CS1809",
                "versions": [
                    {
                        "id": "2d6e5158-a444-44d2-8b55-d70a36ee2025",
                        "professor": "A",
                        "timeSlots": [
                            {
                                "dayOfWeek": 2,
                                "startTime": "08:00",
                                "endTime": "09:15"
                            },
                            {
                                "dayOfWeek": 4,
                                "startTime": "08:00",
                                "endTime": "09:15"
                            }
                        ],
                        "labs": [
                            {
                                "id": "abea56fe-4a7d-4815-8ec4-2cb1b467a6ce",
                                "name": "S2",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "09:30",
                                        "endTime": "10:45"
                                    }
                                ]
                            },
                            {
                                "id": "8a9c2d0f-f7ce-41ab-a7f5-62c3175c25fb",
                                "name": "S3",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "11:15",
                                        "endTime": "12:30"
                                    }
                                ]
                            },
                            {
                                "id": "2678be13-4e92-418c-9a3e-c4fbff2d99f4",
                                "name": "S1",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "12:45",
                                        "endTime": "14:00"
                                    }
                                ]
                            }
                        ],
                        "requiresLab": true
                    },
                    {
                        "id": "0efa8661-aa86-47f1-8abe-83f842910613",
                        "professor": "B",
                        "timeSlots": [
                            {
                                "dayOfWeek": 2,
                                "startTime": "09:30",
                                "endTime": "10:45"
                            },
                            {
                                "dayOfWeek": 4,
                                "startTime": "09:30",
                                "endTime": "10:45"
                            }
                        ],
                        "labs": [
                            {
                                "id": "e1942886-ccb1-4d13-815c-f3c16484a79f",
                                "name": "S4",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "08:00",
                                        "endTime": "09:15"
                                    }
                                ]
                            },
                            {
                                "id": "7a19fb67-5528-4968-8144-c2813eeb0b25",
                                "name": "S6",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "11:15",
                                        "endTime": "12:30"
                                    }
                                ]
                            },
                            {
                                "id": "a4a02585-8328-45fe-a25c-48e78bd422dd",
                                "name": "S5",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "12:45",
                                        "endTime": "14:00"
                                    }
                                ]
                            }
                        ],
                        "requiresLab": true
                    }
                ]
            },
            {
                "id": "a13694a2-07ce-46a8-aa56-3a9f9e345e67",
                "name": "Problem Solving",
                "code": "PS141",
                "versions": [
                    {
                        "id": "ef1571ca-e58f-48d2-bf96-261ec00802f6",
                        "professor": "A",
                        "timeSlots": [
                            {
                                "dayOfWeek": 3,
                                "startTime": "12:45",
                                "endTime": "14:00"
                            },
                            {
                                "dayOfWeek": 4,
                                "startTime": "14:30",
                                "endTime": "15:45"
                            }
                        ],
                        "labs": [
                            {
                                "id": "03bd24df-b10f-4147-9d50-e612d091ddc0",
                                "name": "S2",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "09:30",
                                        "endTime": "10:45"
                                    }
                                ]
                            },
                            {
                                "id": "b58a6e2a-dc3d-44ce-a000-473999340673",
                                "name": "S3",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "11:15",
                                        "endTime": "12:30"
                                    }
                                ]
                            },
                            {
                                "id": "6fc763c7-0935-49ce-98d7-94923672ac44",
                                "name": "S1",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 2,
                                        "startTime": "12:45",
                                        "endTime": "14:00"
                                    }
                                ]
                            }
                        ],
                        "requiresLab": true
                    },
                    {
                        "id": "d04aa06e-5d5d-4eae-959f-2423e558c1ed",
                        "professor": "B",
                        "timeSlots": [
                            {
                                "dayOfWeek": 3,
                                "startTime": "14:30",
                                "endTime": "15:45"
                            },
                            {
                                "dayOfWeek": 4,
                                "startTime": "16:00",
                                "endTime": "17:15"
                            }
                        ],
                        "labs": [
                            {
                                "id": "7e321bbb-11c3-4ff0-a158-da0e4400f12b",
                                "name": "S5",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "08:00",
                                        "endTime": "09:15"
                                    }
                                ]
                            },
                            {
                                "id": "4c374008-47e0-4326-8788-992951cbec86",
                                "name": "S6",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "12:45",
                                        "endTime": "14:00"
                                    }
                                ]
                            },
                            {
                                "id": "b2461b50-eef4-49a2-9ceb-9552d588d8a1",
                                "name": "S4",
                                "timeSlots": [
                                    {
                                        "dayOfWeek": 1,
                                        "startTime": "14:30",
                                        "endTime": "15:45"
                                    }
                                ]
                            }
                        ],
                        "requiresLab": true
                    }
                ]
            }
        ]
    );
    const [currentSchedule, setCurrentSchedule] = useState({
        "selections":
            // []

            [
            {
                "classId": "c34f80b9-0e2a-4b9f-8838-a95e4fd64eea",
                "versionId": "26eeddc8-ed28-404e-8795-9cfdef4f9711",
                "labId": "3ad486ab-bac5-4eb9-9c9a-119421a93486"
            },
            {
                "classId": "7cb32d62-4301-4043-b3a5-59bef3cc5565",
                "versionId": "810d5c69-192d-4349-97f8-8f7b909a4b6b",
                "labId": "d94586f3-5252-42cf-9c48-90e903333db0"
            },
            {
                "classId": "68f9f9d8-e4b4-49b4-addd-af72550971cb",
                "versionId": "2d6e5158-a444-44d2-8b55-d70a36ee2025",
                "labId": "8a9c2d0f-f7ce-41ab-a7f5-62c3175c25fb"
            },
            {
                "classId": "a13694a2-07ce-46a8-aa56-3a9f9e345e67",
                "versionId": "ef1571ca-e58f-48d2-bf96-261ec00802f6",
                "labId": "6fc763c7-0935-49ce-98d7-94923672ac44"
            }
        ]
    });

    return (
        <MainContext.Provider value={{
            classes,
            setClasses,
            currentSchedule,
            setCurrentSchedule
        }}>
            {children}
        </MainContext.Provider>
    );
}

export function useMainContext() {
    return useContext(MainContext);
}