from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/save', methods=['POST'])
def save_data():
    data = request.get_json()
    print(data)  
    return jsonify({'message': 'Data saved successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
