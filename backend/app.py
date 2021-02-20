from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
  return 'Server Works!'

@app.route('/greet')
def say_hello():
  return 'hello!'

@app.route('/machine_learning')
def do_machine_learning():
  return "beep boop i am a roboit"

if __name__ == '__main__':
    app.run(debug=True)