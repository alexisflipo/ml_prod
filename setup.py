from setuptools import _install_setup_requires, setup, find_packages

with open('requirements.txt') as file:
    content = file.readlines()
    requirements = [x.strip() for x in content]

setup(
    name='ml_prod_pkg',
    version='0.0.1',
    packages=['pkg_ml_prod'],
    scripts=['scripts/script_ml_prod'],
    requirements=requirements
)   