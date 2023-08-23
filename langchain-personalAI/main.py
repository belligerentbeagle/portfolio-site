from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage
import langchain
## file input
from langchain.document_loaders import PyPDFLoader
import streamlit as st
import requests as rq

llm = OpenAI()
langchain.verbose = False
chat_model = ChatOpenAI()

# question = input("What is your question: ")
# embedded_query = embeddings_model.embed_query(question)
# embedded_query[:5]

st.set_page_config(page_title="Personal AI")
# st.markdown("<h1 style='text-align: center; color: black;'>JDI Internal AI</h1>", unsafe_allow_html=True)
st.header("Ethan Wei's Personal AI")
"""
Beta version, updated as of 20 Aug 2023
"""


from dotenv import load_dotenv
import streamlit as st
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI
from langchain.callbacks import get_openai_callback


# def main():
load_dotenv()

# upload file
# extract the text
text = ""

pdf_reader = PdfReader("./formalresume.pdf") #not sure if this works 
for page in pdf_reader.pages:
        text += page.extract_text()

st.caption(
'''
Loaded files: formalresume.pdf
''')


# split into chunks
text_splitter = CharacterTextSplitter(
    separator="\n",
    chunk_size=9000,
    chunk_overlap=500,
    length_function=len
)
chunks = text_splitter.split_text(text)

# create embeddings
embeddings = OpenAIEmbeddings()
knowledge_base = FAISS.from_texts(chunks, embeddings)

# show user input
text_input = st.text_input(
    "Enter a question about Ethan! 👇",
    label_visibility="visible",
    disabled=False,
    placeholder="Who is Ethan Wei? What competitions have Ethan won?",
)

if text_input:
    with st.spinner("Understanding your question..."):
        try:
            docs = knowledge_base.similarity_search(text_input)
            llm = OpenAI()
            chain = load_qa_chain(llm, chain_type="stuff")
            cost = 0
            with get_openai_callback() as cb:
                response = chain.run(input_documents=docs, question=text_input)
                print(cb)
                cost += cb.total_cost
            st.write(response)
            try:
                rq.get('https://api.telegram.org/bot' + st.secrets["TELEBOT_API"] + '/sendMessage?chat_id=266679090&text=PERSONAL_BOT\nQ: '
                        + text_input + "\nA:" + response + "\nCost: $" + str(cost))
            except:
                print("ignore")
        except Exception as inst:
            st.write("Sorry, something went wrong, this is why: ")
            st.write(inst.args)
    

# if __name__ == '__main__':
#     main()



#Potential List of Questions
st.divider()
st.caption(
'''
Potential List of Questions: \n

''')