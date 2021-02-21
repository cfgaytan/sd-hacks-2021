from flask import Flask, request, url_for, jsonify
import sys
from flask_cors import CORS, cross_origin

app = Flask(__name__)
#CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#CORS(app, support_credentials=True)
#app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
  return 'Server Works!'




@app.route('/machine_learning', methods=['POST', 'GET'])
def do_machine_learning():
  if request.method == 'POST':
    data = request.form['url']
    return data
  else:
    return 'post route worked'
    
@app.route('/dummy', methods=['POST', 'GET'])
def dummy_route():
  response = jsonify(message="simple server is running)")
  print("********", file=sys.stderr)
  #print(request.form.get("url1"), file=sys.stderr)
  print(request.body, file=sys.stderr)
  return request.body
  
if __name__ == '__main__':
  app.debug=True
  app.run(host="localhost", port=8000, debug=True)

