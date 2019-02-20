from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('layout.html')


@app.route('/start')
def start_game():
    started = request.form.get('started')
    return render_template('layout.html', started=started)


if __name__ == '__main__':
    app.run(debug=True)
