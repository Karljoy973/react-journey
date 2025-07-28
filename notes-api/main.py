from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Field, Session, SQLModel, create_engine, select
import os
from dotenv import load_dotenv

app = FastAPI()

origins = [
    "http://localhost:5173",  # ton frontend React local
    "http://127.0.0.1:3000",
    "*",  
]


class Note(SQLModel, table=True):
    id: int
    title:str
    category: str
    priority: str
    description: str

note_1 = Note(id=0, title="hello world", category="Travail", priority="Faible", description="Hello world I am creating a fastAPI api")
note_2 = Note(id=1, title="hello world", category="Travail", priority="Médium", description="Hello world I am creating a fastAPI api")
note_3 = Note(id=2, title="hello world", category="Travail", priority="Faible", description="Hello world I am creating a fastAPI api")

engine = create_engine(os.getenv(DATABASE_PATH))
SQLModel.metadata.create_all(engine)


    

notes = [
        {
        "titre": "tire1", 
        "priorité": "faible", 
        "catégorie": "travaili", 
        "description": "description n°1"
        }, 
        {
        "titre": "tire1", 
        "priorité": "faible", 
        "catégorie": "travaili", 
        "description": "description n°2"
        },
        {"titre": "tire1", 
        "priorité": "faible", 
        "catégorie": "travaili", 
        "description": "description n°3"
        }
        ]

app.add_middleware(
CORSMiddleware, 
allow_origins=origins, 
allow_credentials=True, 
allow_methods=["*"], 
allow_headers=["*"]
)


@app.get("/")
async def root():
    with Session(engine) as session: 
        session.add(note_1)
        session.add(note_2)
        session.add(note_3)
        session.commit()

    with Session(engine) as session : 
        statement = select(Note).where(Note.id == 0)
        note = session.exec(statement).first()
        print(note)
    return [{"message": "Hello World"}]

# à priori je vais requeter une base de données donc c'est asynchrone
@app.get("/notes") 
async def getNotes() -> list[dict[str, str]]:
    return notes
