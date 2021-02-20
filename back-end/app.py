from flask import Flask, request, url_for
import sys
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, resources={r"/*": {"origins": "*"}})
#CORS(app, support_credentials=True)
#app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
  return 'Server Works!'


@app.route('/machine_learning', methods=['POST', 'GET'])
@cross_origin(supports_credentials=True)
def do_machine_learning():
  print(sys.path)
  data = ''
  if request.method == 'POST':
    data = request.form
    return data
  else:
    return 'post route worked'

if __name__ == '__main__':
    app.run(debug=True)

