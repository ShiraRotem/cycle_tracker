import streamlit as st

# Title of the app
st.title('Cycle Tracker App')

# Form to input cycle data
st.subheader('Enter your cycle data')

# Example input fields
date = st.date_input('Date')
day_of_cycle = st.number_input('Day of Cycle', min_value=1, max_value=1000)
note = st.text_area('Note')

sex = st.selectbox('Sex', ['Other', 'Unprotected', 'Condom', 'Withdrawal'])
bleeding = st.slider('Bleeding Level', 0, 4)
fluid = st.selectbox('Fluid', ['Baseline', 'Fertile', 'Super Fertile', 'Dry'])
cramps = st.slider('Cramps Level', 0, 3)
mood = st.selectbox('Mood', ['Happy', 'Sad', 'Angry'])

# Button to submit data
if st.button('Save Entry'):
    st.success('Data saved successfully!')

# Display the entered data (for testing)
st.write('Date:', date)
st.write('Day of Cycle:', day_of_cycle)
st.write('Note:', note)
st.write('Sex:', sex)
st.write('Bleeding Level:', bleeding)
st.write('Fluid:', fluid)
st.write('Cramps Level:', cramps)
st.write('Mood:', mood)
